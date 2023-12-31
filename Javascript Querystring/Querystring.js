<script language="javascript">
	function Querystring(qs) // optionally pass a querystring to parse
	{
		this.params = new Object()
		this.get=Querystring_get
		
		if (qs == null)
			qs=location.search.substring(1,location.search.length)

		if (qs.length == 0) return

	// Turn <plus> back to <space>
	// See: http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.13.4.1
		qs = qs.replace(/\+/g, ' ')
	// parse out name/value pairs separated via &
		var args = qs.split('&')
		
	// split out each name=value pair
		for (var i=0;i<args.length;i++)
		{
			var pair = args[i].split('=')
			name = unescape(pair[0])

			var value
			if (pair.length == 2)
				value = unescape(pair[1])
			else
				value = name
			
			this.params[name] = value
		}
	}

	function Querystring_get(key, default_) // 'default' defaults to null
	{
		// This silly looking line changes UNDEFINED to NULL
		if (default_ == null) default_ = null;
		
		var value=this.params[key]
		if (value==null){value=default_}
		
		return value
	}		
</script>