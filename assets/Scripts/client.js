//var io = require('socket.io');
cc.Class({
    extends: cc.Component,

    properties: {
        manager: cc.Node,

        userData: cc.Node,

        avatarPool: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._avatarPool = this.avatarPool.getComponent('avatarPool');
        this._manager = this.manager.getComponent('TypingMessage');
        this._userData = this.userData.getComponent('userData');
        this.socket = io('https://serverchatapp.onrender.com'); // Điều chỉnh URL máy chủ của bạn
        // this.socket = io('http://localhost:3000'); // Điều chỉnh URL máy chủ của bạn
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
        var avatarName = this._userData.userAvatarName;
        this._name = name;
        this.socket.emit('on-chat', {
            name,
            avatarName,
            message,
        });
    },

    getMessage(){
        this.socket.on('user-chat', (arg) => {
            var name1 = this._name;
            this.getAvatar(arg.avatarName);
            // cc.log(name1);
            // cc.log(arg.avatarName);
            const message = {
                text: arg.message,
                x: 120,
                y: this._manager.scrollViewsContent.content.childrenCount*60 + 40,
                avatar: null,
                userName: arg.name,
                avatar: this.avatarFrame,
            }
            
            if(arg.name != name1) {
                this._manager.getMessage(message);
            }
          });
    },

    getAvatar(userAvatarName){
        for(let i = 0; i < this._avatarPool.avatar.length; i++){
            // cc.log(this._avatarPool.avatar[i]);
            if(this._avatarPool.avatar[i].name === userAvatarName) {
                this.avatarFrame = this._avatarPool.avatar[i];
                break;
            }
        }
    },
    start() {
        this.setupSocketListeners();
    },

    // update (dt) {},
});
