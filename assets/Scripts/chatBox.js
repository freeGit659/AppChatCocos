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
        
    },

    update (dt) {
        this.node.height = this.textLabel.node.height+40;
    },

    setMessage(message){
        this.avatar.spriteFrame = message.avatar;
        this.textLabel.string = message.text;
        this.nameLabel.string = message.userName;
        this.node.x = message.x;
        if(this.node.x <= 120) {
            this.nameLabel.node.x = -90;
            this.nameLabel.node.anchorX = 0;
            this.node.color = new cc.Color(39,109,109);
            this.avatar.node.x = -270;
        }
        this.node.y = message.y;
        cc.log(this.node.height,this.textLabel.node.height);
    }

});
