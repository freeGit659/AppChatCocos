
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    pushMessageUp(){
        this.node.getComponent(cc.ScrollView).content.getChildren().forEach(element => {
            element.zIndex++;
        });;
    }
});
