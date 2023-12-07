//var io = require('socket.io');
cc.Class({
    extends: cc.Component,

    properties: {
        manager: cc.Node,

        userData: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._manager = this.manager.getComponent('TypingMessage');
        this._userData = this.userData.getComponent('userData');
        this.socket = io('http://172.16.1.45:3000'); // Điều chỉnh URL máy chủ của bạn
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
        var name = this._userData.userName;
        this._name = name;
        this.socket.emit('on-chat', {
            name,
            message 
        });
    },

    getMessage(){
        this.socket.on('user-chat', (arg) => {
            var name1 = this._name;
            cc.log(name1);
            const message = {
                text: arg.message,
                x: -20,
                y: this._manager.scrollViewsContent.content.childrenCount*60 + 40,
                avatar: null,
            }
            if(arg.name != name1) {
                this._manager.getMessage(message);
            }
          });
    },
    start() {
        this.setupSocketListeners();
    },

    // update (dt) {},
});
