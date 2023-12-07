
cc.Class({
    extends: cc.Component,

    properties: {
        typingBox: cc.EditBox,

        chatBox: cc.Prefab,

        scrollViewsContent: cc.ScrollView,

        userAvatar: cc.Sprite,

        client: cc.Node,
        

    },


    // onLoad () {},

    start () {
        this.typingBox.focus();
        this._client = this.client.getComponent('client');
    },

    // update (dt) {},

    messageTemp(){
        this._messageTemp = this.typingBox.string;
    },

    sendMessage(){
        const message = {
            text: this._messageTemp,
            x: 20,
            y: this.scrollViewsContent.content.childrenCount*60 + 40,
            avatar: this.userAvatar.spriteFrame,
        }
        this._client.sendMessage(message.text);
        this.scrollViewsContent.node.getComponent('scrollviewCtrl').pushMessageUp();
        var newChat = cc.instantiate(this.chatBox);
        newChat.getComponent('chatBox').setMessage(message);
        newChat.parent = this.scrollViewsContent.content;
    },

    clearEditBox(){
        this.messageTemp();
        this.typingBox.string = '';
        this.typingBox.node.getChildByName('TEXT_LABEL').string = '';
        this.typingBox.focus();
    },

    getMessage(message){
        this.scrollViewsContent.node.getComponent('scrollviewCtrl').pushMessageUp();
        var newChat = cc.instantiate(this.chatBox);
        newChat.getComponent('chatBox').setMessage(message);
        newChat.parent = this.scrollViewsContent.content;
    }
});
