function OnConvert(bin)
   {
      var bin=binelem.value;
      var iencode=1;
      if( iencode==0 )
      {
         bin = bin.replace(/[^0-1]/g,"");
         bin = bin.match(/[0-1]{8}/g);
      }
      else
         bin = bin.match(/[0-1]*/g).filter(function (el) {
            return el!="";
         });
      var len = bin.length;
      if( len==0 ) return;
      var txt='';
      if( iencode<2 )
      {
         for(var i=0; i<len; i++)
         {
            var b = bin[i];
            var code = parseInt(b,2);
            var t = String.fromCodePoint(code);
            /*
            var t;
            if( iencode==0 )
               t = String.fromCharCode(code);
            else
               t = String.fromCodePoint(code);
            */
            txt += t;
         }; return txt;
      }
      else
      {
         var encoding = 'utf-8';
         bin = bin.map(function(item) {
            return parseInt(item, 2);
         });
         var bytes = new Uint8Array(bin);
         txt = new TextDecoder(encoding).decode(bytes);
	 return txt
      }
   }
