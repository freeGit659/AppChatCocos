cc.Class({
    extends: cc.Component,

    properties: {
        avatarPool: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    openAvatarPool(){
        this.avatarPool.active = true;
        // this.avatarPool.node = cc.scaleTo(2, 1, 1);
    }
    // update (dt) {},
});
