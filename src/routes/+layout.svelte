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
<AppShell>

	<svelte:fragment slot="header"><AppBar><h1>WELCOME TO MY BLOG</h1></AppBar></svelte:fragment>
	<!-- Router Slot -->

	<slot />
	<!-- ---- / ---- -->
	<br>
	<svelte:fragment slot="footer">Dibuat Oleh Muhammad Azzam Hilmy</svelte:fragment>

</AppShell>
