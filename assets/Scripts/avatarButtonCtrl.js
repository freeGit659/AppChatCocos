cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setAvatar(){
        this.avatar.spriteFrame = this.node.getComponent(cc.Button).target.getComponent(cc.Sprite).spriteFrame;
        this.closeAvatarPool();
    },

    closeAvatarPool(){
        // var action = cc.scaleTo(0.5, 0 ,0);
        // this.node.parent.runAction(action);
        this.node.parent.active = false;
        cc.log(this.node.parent);
        //this.node.parent.active = false;
    }

    // update (dt) {},
});
