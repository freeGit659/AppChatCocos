cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,

        inputName: cc.EditBox,

        mainChat: cc.Node,

        userData: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setUserName(){
        this._userData = this.userData.getComponent('userData');
        this._userData.userName = this.inputName.string;
        this._userData.avatar = this.avatar.spriteFrame;
        this.node.parent.active = false;
        this.mainChat.active = true;
    }

    // update (dt) {},
});
