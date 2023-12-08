cc.Class({
    extends: cc.Component,

    properties: {
        textLabel: cc.Label,

        avatar: cc.Sprite,

        nameLabel: cc.Label,
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
        this.nameLabel.string = message.userName;
        this.node.x = message.x;
        if(this.node.x < 0) {
            this.nameLabel.node.x *= -1;
            this.nameLabel.node.anchor = 0;
        }
        this.node.y = message.y;
    }

});
