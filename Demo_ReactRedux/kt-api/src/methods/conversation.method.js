'use strict';

const faker = require('faker');
var moment = require('moment');
const {
  concat,
    find,
    map,
    parseInt,
    pick,
    random,
    sample, times, sampleSize, filter
} = require('lodash');
const { Conversation } = require('./../models');

let users = [];

times(20, function (idx) {
    users.push({
        id: idx,
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        image_url: faker.random.image(),
        is_online : (idx % 2 == 0 ? "true" : "false"),
        is_me: false
    })
})

const me = {
    id: users.length,
    name: 'Takuto Suzuki',
    image_url: faker.random.image(),
    is_online: "true",
    is_me: true
};
users.push(me);

const createMessages = (users) => {
    let userid = parseInt(sample(users).id);
    let user = filter(users, x => x.id === userid)

    if (user != undefined && user != null)
    {
        user = user[0];
    }

    return {
        id: faker.random.number(),
        sender_id: userid,
        message: faker.lorem.words(),
        date: new Date(2017, 8, random(1,13)).toString(),
        user: user
    }
};
const createConversations = (type, count) => {
    return times(count, (idx) => {
        const task = new Conversation({
            id: faker.random.number(),
            type,
            name: faker.name.title(),
            notificationCount: random(0, 5)
        });
        const usersCt = random(2, 7);
        const participantUsers = sampleSize(users, usersCt);
        task.participants = {
            total: 5,
            list: participantUsers
        };
        task.messages = times(10, (idx) => createMessages(users));
        return task;
    });
}

const createSideMenuConversations = (type, tasks) => {

    return times(tasks.length, (count) => {
        //const task = new Conversation({
        //    id: faker.random.number(),
        //    type,
        //    name: faker.name.title(),
        //    notificationCount: random(0, 5)
        //});
        const task = tasks[count];
        const usersCt = random(2, 7);
        const participantUsers = sampleSize(users, usersCt);

        if (tasks.participants == undefined)
        {
            tasks.participants = [];
        }

        if (tasks.messages == undefined) {
            tasks.messages = [];
        }

        task.participants = {
            total: 5,
            list: participantUsers
        };
        task.messages = times(5, (idx) => createMessages(users));
        return task;
    });
}


const anns = createConversations('announcement', random(1, 3));
const msgs = createConversations('message', random(5, 12));
const tsks = createConversations('task', random(2, 6));
//const all = concat(anns, msgs, tsks);

const conv = [
    {
        id: faker.random.number(),
        type:"conversations",
        name: "A conversation with one or more selected person",
        icon: "dot",
        color: "dark-green",
        notificationCount: random(0, 5)
    },
    {
        id: faker.random.number(),
        type: "conversations",
        name: "An announcement",
        icon: "dot",
        color: "red",
        notificationCount: random(0, 5)
    },
    {
        id: faker.random.number(),
        type: "conversations",
        name: "A group chat",
        icon: "dot",
        color: "light-green",
        notificationCount: random(0, 5)
    },
    {
        id: faker.random.number(),
        type: "conversations",
        name: "A meeting",
        icon: "dot",
        color: "orange",
        notificationCount: random(0, 5)
    },
    {
        id: faker.random.number(),
        type: "conversations",
        name: "A task",
        icon: "dot",
        color: "blue",
        notificationCount: random(0, 5)
    },


]

const tms = [
    {
        id: faker.random.number(),
        type: "teams",
        name: "Projects",
        icon: "fa fa-files-o",
        color: "pink",
        notificationCount: random(0, 5)
    },
    {
        id: faker.random.number(),
        type: "teams",
        name: "Documentation",
        icon: "fa-file-text-o",
        color: "green",
        notificationCount: random(0, 5)
    },
    {
        id: faker.random.number(),
        type: "teams",
        name: "Calendar",
        icon: "fa-calendar-o",
        color: "orange",
        notificationCount: random(0, 5)
    },
    {
        id: faker.random.number(),
        type: "teams",
        name: "Requests",
        icon: "fa-hand-paper-o",
        color: "red",
        notificationCount: random(0, 5)
    }
]

const pers = [
    {
        id: faker.random.number(),
        type: "personal",
        name: "Goal Settings",
        icon: "fa-cog",
        color: "blue",
        notificationCount: random(0, 5)
    },
    {
        id: faker.random.number(),
        type: "personal",
        name: "Notes",
        icon: "fa-sticky-note-o",
        color: "green",
        notificationCount: random(0, 5)
    }
]

const conversations = createSideMenuConversations('conversations', conv);
const teams = createSideMenuConversations('teams', tms);
const personal = createSideMenuConversations('personal', pers);
const all = concat(anns, msgs, tsks,conversations, teams, personal);


module.exports = {
    get: () => {
        console.log('get all teams', map(all, 'id'));
        return Promise.resolve({
            
            announcements: pickSome(anns),
            messages: pickSome(msgs),
            tasks: pickSome(tsks),

            conversations: pickSome(conversations),
            teams: pickSome(teams),
            personal: pickSome(personal)
        });
    },
    getById: (id) => {
        id = parseInt(id);
        return find(all, { id });
    },
    addMessage: (conversationId, msg) => {

        let conversation = filter(all, x => x.id === parseInt(conversationId))

        if (conversation != undefined && conversation != null) {
            conversation = conversation[0];
            if (conversation.messages == undefined)
            {
                conversation.messages = {};

            }
            const message = {
                id: faker.random.number(),
                sender_id: me.id,
                message: msg,
                date: new Date().toString(),
                user: me
            }
            conversation.messages.push(message)
        }

        return conversation;
    }
};

const fewThings = [
    'id', 'type', 'name', 'notificationCount','icon','color'
];
function pickSome(list) {
    return map(list, v => pick(v, fewThings));
}
