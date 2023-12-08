
cc.Class({
    extends: cc.Component,

    properties: {
        typingBox: cc.EditBox,

        chatBox: cc.Prefab,

        scrollViewsContent: cc.ScrollView,

        userData: cc.Node,

        client: cc.Node,
        

    },


    // onLoad () {},

    start () {
        this.typingBox.focus();
        this._client = this.client.getComponent('client');
        this._userData = this.userData.getComponent('userData');
    },

    // update (dt) {},

    messageTemp(){
        this._messageTemp = this.typingBox.string;
    },

    sendMessage(){
        this.messageTemp();
        const message = {
            text: this._messageTemp,
            x: 20,
            y: this.scrollViewsContent.content.childrenCount*60 + 40,
            avatar: this._userData.avatar,
            userName: this._userData.userName,
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
