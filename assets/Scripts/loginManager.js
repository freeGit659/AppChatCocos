cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,

        inputName: cc.EditBox,

        mainChat: cc.Node,

        userData: cc.Node,

        notification: cc.Label,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setUserName(){
        this._userData = this.userData.getComponent('userData');
        this._userData.userName = this.inputName.string;
        if(this._userData.userName === '') {
            this.onNotification('Please enter name');
            return;
        }
        this._userData.avatar = this.avatar.spriteFrame;
        this._userData.userAvatarName = this.avatar.spriteFrame.name;
        if(this._userData.userAvatarName === 'default_sprite'){
            this.onNotification('Please choose an avatar');
            return;
        };
        this.node.parent.active = false;
        this.mainChat.active = true;
    },

    onNotification(string){
        this.notification.node.active = true;
        this.notification.string = string;
    }

    // update (dt) {},
});
