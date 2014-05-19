
	
	var   Class 			= require('ee-class')
		, log 				= require('ee-log')
		, assert 			= require('assert')
		, LocalTransport 	= require('ee-soa-transport-local')
		, Request 			= require('ee-soa-request')
		, Response 			= require('ee-soa-response');



	var TransportManager = require('../')
		, manager;



	describe('the TransportManager', function(){
		it('should not throw wenn instantiated', function(){
			manager = new TransportManager();
		});

		it('should be able to accept a transport', function(){
			manager.use(new LocalTransport());
		});


		it('should be respond to a request', function(done){
			var res = new Response();

			res.on('end', function(status, data){
				assert.equal(status, res.statusCodes.OK);
				done();
			});

			manager.on('request', function(req, res){
				res.send(res.statusCodes.OK);
			});

			manager.request('local', new Request(), res);			
		});	
	});
	