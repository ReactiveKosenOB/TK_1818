const LINEModule = require('../modules/LINEMessage')
var LINEMessage = LINEModule.lineMessage
var ActionBuilder = LINEModule.actionBuilder
var MainBuilder = LINEModule.mainBuilder
var ContentsBuilder = LINEModule.contentsBuilder

module.exports = {
    getTemplate : function(contentData) {
        return {
            'type' : 'text',
            'text' : "てきすと"
        }
    }
}