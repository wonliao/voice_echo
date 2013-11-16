/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    
        console.log('Received Event: ' + id);

			
		var recordBtn = document.getElementById("record_btn");
		recordBtn.addEventListener("touchend", function(evt) {
			console.log("push");
			app.record();
		}, false);
    },
	record: function() {
		
		console.log("record");
		
		LowLatencyAudio.stop2( "all" );
		
		// start audio capture
		navigator.device.capture.captureAudio( app.captureSuccess, app.captureError, {limit:1});
	},
	captureSuccess: function(mediaFiles) {
		var i, path, len;
		for (i = 0, len = mediaFiles.length; i < len; i += 1) {
			
			var path = mediaFiles[i].fullPath;
			console.log( "path(" + path + ")" );

            LowLatencyAudio.loadSong( '1', path ); // 第一部合聲
            LowLatencyAudio.loadSong( '2', path ); // 第二部合聲
            LowLatencyAudio.loadSong( '3', path ); // 第三部合聲
            LowLatencyAudio.pitch( '1', '1.5'  );  // 將第一部合聲的 pitch 提高 1.5 倍
            LowLatencyAudio.pitch( '2', '2.0'  );  // 將第二部合聲的 pitch 提高 2.0 倍
            LowLatencyAudio.pitch( '3', '2.5'  );  // 將第三部合聲的 pitch 提高 2.5 倍
            
			setTimeout( function() {
				LowLatencyAudio.play2( 'all' );
			}, 2000 );
			
		}
	},
	// capture error callback
	captureError: function(error) {
		navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
	}
};
