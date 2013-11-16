voice_echo
==========

想要模仿電影鼠來寶的3隻花栗鼠的合音效果

youtube 影片

[![youtube 影片](http://img.youtube.com/vi/VTsbQbhvcAk/0.jpg)](http://www.youtube.com/watch?v=VTsbQbhvcAk)

說明

    因為之前已經練習過套入一套可以動態調整聲音的播放速度及聲音Pitch的元件庫 Dirac3-Mobile
    詳細的元件庫說明請參照 https://github.com/gerasim13/Dirac-3-LE
    也可以參考另一篇<<動態調整聲音的播放速度及聲音Pitch>>https://github.com/wonliao/change_playback_speed

    這次也練習使用 phonegap plugin，雖然使用了 LowLatencyAudio 這一個 plugin
    但其實只有拿來當作 javascript 呼叫 objective-c 函式而已
    
    
    關於 phonegap 錄音的 API 是 captureAudio，如下列所示
    navigator.device.capture.captureAudio( captureSuccess, captureError, {limit:1});
    
    錄音成功後，會回呼 captureSuccess，可以在傳入的參數裡找到所儲存的錄音檔位置
    captureSuccess: function(mediaFiles) {
		    var i, path, len;
    		for (i = 0, len = mediaFiles.length; i < len; i += 1) {
			
			      var path = mediaFiles[i].fullPath;
			  }
	  }
	  
	  
	 接下來的三部合聲，其實就只是把同一個錄音檔用3種 pitch 同時播放
	 LowLatencyAudio.loadSong( '1', path ); // 第一部合聲
	 LowLatencyAudio.loadSong( '2', path ); // 第二部合聲
	 LowLatencyAudio.loadSong( '3', path ); // 第三部合聲
	 LowLatencyAudio.pitch( '1', '1.5'  );  // 將第一部合聲的 pitch 提高 1.5 倍
	 LowLatencyAudio.pitch( '2', '2.0'  );  // 將第二部合聲的 pitch 提高 2.0 倍
	 LowLatencyAudio.pitch( '3', '2.5'  );  // 將第三部合聲的 pitch 提高 2.5 倍
	 
	 
