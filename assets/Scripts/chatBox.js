cc.Class({
    extends: cc.Component,

    properties: {
        textLabel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    setMessage(message){
        this.textLabel.string = message.text;
        this.node.x = message.x;
        this.node.y = message.y;
    }


});
