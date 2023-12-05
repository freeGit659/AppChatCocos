
cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab: cc.Prefab,
        parentNode: cc.Node,
        spi: cc.SpriteFrame,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    pushPrefab(){
        var item = cc.instantiate(this.itemPrefab);
        this.parentNode.addChild(item);
        item.y = this.parentNode.childrenCount*(-80) - 40;
        cc.log(this.spi);
    }
});
