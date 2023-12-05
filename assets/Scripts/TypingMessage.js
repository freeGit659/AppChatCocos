
cc.Class({
    extends: cc.Component,

    properties: {
        typingBox: cc.EditBox,

        chatBox: cc.Prefab,

        scrollViewsContent: cc.ScrollView,
        

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    sendMessage(){
        const message = {
            text: this.typingBox.string,
            x: 20,
            y: this.scrollViewsContent.content.childrenCount*60 + 40
        }

        var newChat = cc.instantiate(this.chatBox);
        newChat.getComponent('chatBox').setMessage(message);
        newChat.parent = this.scrollViewsContent.content;
        cc.log(this.scrollViewsContent.content.childrenCount);
    }
});
