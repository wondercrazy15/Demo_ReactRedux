
import { fromJS } from 'immutable';
import messagePageReducer from '../reducer';

describe('messagePageReducer', () => {
    it('returns the initial state', () => {

        const initialState = fromJS({
            conversation: {
                messages: [
                    // {
                    //   id: 1234252,
                    //   sender_id: 1234,
                    //   name: 'Taku',
                    //   message: 'Message'
                    // }
                ],
                participants: {
                    total: 0,
                    list: [
                        // {
                        //   id: 12345,
                        //   name: 'Takuto Suzuki',
                        //   image_url: 'example.com'
                        // }
                    ]
                },
            },
            isFetching: false,
            isFetched: false,
            error: {
                type: null,
                message: null
            }
        });
        expect(messagePageReducer(undefined, {})).toEqual(initialState);
  });
});
