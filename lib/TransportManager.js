!function(){

	var   Class 		= require('ee-class')
		, EventEmitter 	= require('ee-event-emitter')
		, log 			= require('ee-log');



	module.exports = new Class({
		inherits: EventEmitter


		, init: function(options) {
			Class.define(this, '_transports', Class({}));
		}


		, use: function(transport) {
			this._transports[transport.getType()] = transport;

			transport.on('request', function(request, response){
				this.emit('request', request, response);
			}.bind(this));
		}


		, request: function(type, request, response) {
			if (Object.hasOwnProperty.call(this._transports, type)){
				this._transports[type].request(request, response);
			}
			else {
				response.send(response.statusCodes.TRANSPORT_NOT_AVAILABLE);
			}
		}
	});
}();
