module.exports = {
  announcements: {
    get: require('./announcements/get_announcement.controller')
  },
  conversations: {
      get: require('./conversations/get_conversation.controller'),
      add: require('./conversations/add_conversation_message_controller')
  },
  messages: {
    get: require('./messages/get_message.controller')
  },
  tasks: {
    get: require('./tasks/get_task.controller')
  },
  teams: {
    get: require('./teams/get_team.controller'),
    getAll: require('./teams/get_teams.controller')
  },
  menu: {
    get: require('./menu/get_menu.controller')
  }
}
