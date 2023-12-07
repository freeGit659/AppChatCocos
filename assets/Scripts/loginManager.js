cc.Class({
    extends: cc.Component,

    properties: {
        inputName: cc.EditBox,

        mid : cc.Node,

        userData: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setUserName(){
        this._userData = this.userData.getComponent('userData');
        this._userData.userName = this.inputName.string;
        cc.log(this._userData.userName);
        this.node.parent.active = false;
        this.mid.active = true;
    }

    // update (dt) {},
});
