# ee-soa-transportmanager

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/ee-soa-transportmanager.svg)](https://greenkeeper.io/)

Manages the SOA Transports

## installation

	 npm install ee-soa-transportmanager

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-transportmanager.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-transportmanager)


## usage

The transportmanager is able to send requests through different means of transport.

	var   TransportManager 	= require('ee-soa-transportmanager')
		, transport  		= new TransportManager();


	transport.use(new Transport());

	transport.on('request', function(request, response){
		if (request.getDiscovery() === 'discovered') {
			// the request was already sent through the discovery
			// send it to a service in the local process
		}
		else {
			// go through discovery, send to another service
			// through the transport defined in the discovery response

		}
	});



	// send a request using the local transport
	transport.request('local', request, response);

