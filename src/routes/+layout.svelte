<script lang = "ts">
	import '../app.css';
	import {page} from '$app/stores';
</script>
<pre>
	{JSON.stringify($page, null, 2)}
</pre>
<svelte:head>
	<title>
		{$page.data.post?.title}
	</title>
</svelte:head>
<nav>
	<ul>
		<li>
			<a href = "/">Home</a>
		</li>
		<li>
			<a href = "/posts">Posts</a>
		</li>
	</ul>
</nav>
<slot/>