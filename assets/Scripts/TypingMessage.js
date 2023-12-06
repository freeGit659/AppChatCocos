
cc.Class({
    extends: cc.Component,

    properties: {
        typingBox: cc.EditBox,

        chatBox: cc.Prefab,

        scrollViewsContent: cc.ScrollView,

        userAvatar: cc.Sprite,
        

    },


    // onLoad () {},

    start () {
        this.typingBox.focus();
    },

    // update (dt) {},

    sendMessage(){
        const message = {
            text: this.typingBox.string,
            x: 20,
            y: this.scrollViewsContent.content.childrenCount*60 + 40,
            avatar: this.userAvatar.spriteFrame,
        }
        this.scrollViewsContent.node.getComponent('scrollviewCtrl').pushMessageUp();
        var newChat = cc.instantiate(this.chatBox);
        newChat.getComponent('chatBox').setMessage(message);
        newChat.parent = this.scrollViewsContent.content;
    },

    clearEditBox(){
        this.typingBox.string = '';
        this.typingBox.node.getChildByName('TEXT_LABEL').string = '';
        this.typingBox.focus();
    }
});
