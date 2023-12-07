//var io = require('socket.io');
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.socket = io('http://172.16.1.45:3000'); // Điều chỉnh URL máy chủ của bạn
        this.setupSocketListeners();
    },
    setupSocketListeners() {
        this.socket.on('connect', () => {
            console.log('Connected to server');
        });
    },

    start() {

    },

    // update (dt) {},
});
