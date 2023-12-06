cc.Class({
    extends: cc.Component,

    properties: {
        textLabel: cc.Label,

        avatar: cc.Sprite,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.height = this.textLabel.node.height+5;
    },

    // update (dt) {},

    setMessage(message){
        this.avatar.spriteFrame = message.avatar;
        this.textLabel.string = message.text;
        this.node.x = message.x;
        this.node.y = message.y;
    }

});
