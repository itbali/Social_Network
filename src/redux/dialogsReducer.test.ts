import {DialogsPageType, DialogsReducer, onSendMessage} from "./dialogsReducer";

let state: DialogsPageType = {
  dialogData: [
    {id: 1, name: "Alex"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Victor"},
    {id: 4, name: "Valera"}
  ],
  messageData: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "How is your dog?"},
    {id: 4, message: "Write me please..."}
  ],
}

it('messages array length should be incremented', () => {
  let action = onSendMessage('new message')
  let newState = DialogsReducer(state, action)
  expect(newState.messageData.length).toBe(state.messageData.length + 1);
});
it('messages array should not be changed with empty message', () => {
  let action = onSendMessage('  ')
  let newState = DialogsReducer(state, action)
  expect(newState.messageData.length).toBe(state.messageData.length);
});
