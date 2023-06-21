<script lang="ts">
	import type {PageData} from './$types';
  import {invalidate, invalidateAll} from '$app/navigation';
	export let data: PageData;
	$: ({posts} = data);
	function rerunLoadFunction(){
		invalidate('posts');
		invalidate('api/posts');
		invalidate(url => url.href.includes('posts'));
		invalidateAll();
	}
</script>
<h1>Posts</h1>
<button on:click = {rerunLoadFunction}>
	Rerun
</button>
<p>Showing 
	{posts.length} posts
</p>
{#each posts as {slug, title}}
	<ul>
		<li>
			<a href = "/posts/{slug}">
				{title}
			</a>
		</li>
	</ul>
{/each}