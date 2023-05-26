<script>
	
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-modern.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/all.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
import '../app.css';

import { AppShell } from '@skeletonlabs/skeleton';
import { AppBar } from '@skeletonlabs/skeleton';

</script>
<!-- App Shell -->
<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/5 w-56">


	<svelte:fragment slot="header"><AppBar>

		
<h1>
	<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">WELCOME TO MY BLOG.</span>
</h1>
	</AppBar></svelte:fragment>
	<!-- Router Slot -->

	<slot />
	<!-- ---- / ---- -->
	<br>
	<svelte:fragment slot="footer">Dibuat Oleh Muhammad Azzam Hilmy</svelte:fragment>

</AppShell>
