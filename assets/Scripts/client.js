//var io = require('socket.io');
cc.Class({
    extends: cc.Component,

    properties: {
        manager: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.socket = io('http://172.16.1.45:3000'); // Điều chỉnh URL máy chủ của bạn
        this.setupSocketListeners();
    },
    setupSocketListeners() {
        this.socket.on('connect', () => {
            console.log('Connected to server');
        });
        // this.socket.on('user-chat',(message) =>{
        //     cc.log(message);
        // })
        this.getMessage();
    },
    
    sendMessage(message){
        this.socket.emit('on-chat', {
            message 
        });
    },

    getMessage(){
        this.socket.on('user-chat', (arg) => {
            const message = {
                text: arg.message,
                x: -20,
                y: this._manager.scrollViewsContent.content.childrenCount*60 + 40,
                avatar: null,
            }
            this._manager.getMessage(message);
            console.log(arg);

          });
    },
    start() {
        this._manager = this.manager.getComponent('TypingMessage');
    },

    // update (dt) {},
});
