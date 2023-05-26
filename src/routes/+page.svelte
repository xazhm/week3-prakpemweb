<script>
	
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-modern.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/all.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
import '../app.css';

import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

</script>

<br>
<div class="box px-5">
<div class="card p-5 shadow-lg shadow">
			 <ol class="breadcrumb">
	<li><span class="badge variant-filled">Home</span></li>
	<li class="crumb-separator" aria-hidden>/</li>
	<li><span class="badge variant-filled">Blog</span></li>
	<li class="crumb-separator" aria-hidden>/</li>
	<li><span class="badge variant-filled">Article</span></li>
</ol>
<br>
			               <h2>CARA MEMBUAT JASUKE<br>[COCOK UNTUK BERBUKA PUASA]</h2>
    	<br><header class="card-header block card card-hover p-4">
	<center>
			<img alt="" src="https://blog.tokowahab.com/wp-content/uploads/2018/08/resep-jasuke.jpg">
	</center>
		</header>

	<section class="p-4">
		<center>[JASUKE - Jagung Susu Kedelai]</center><br>
		<header class="card-header block card card-hover p-4">
		Jagung Susu Kedelai atau JASUKE adalah minuman sehat yang terbuat dari campuran jagung, susu, dan kedelai. Kombinasi unik ini menghasilkan minuman dengan rasa yang nikmat serta kaya akan nutrisi. Jagung kaya akan serat, sementara kedelai kaya akan protein dan kalsium, dan susu mengandung vitamin D dan kalsium.
	</header>
	</section>

	
<br>


	<footer class="card-footer"><center>Cara membuat JASUKE:</center></footer>

<Accordion>
		<AccordionItem>
		<svelte:fragment slot="lead"><span class="badge bg-primary-500">></span></svelte:fragment>
		<svelte:fragment slot="summary">KALKULATOR BAHAN JASUKE</svelte:fragment>
		<svelte:fragment slot="content">
	<a href="https://week4-prakpemweb.vercel.app/">		
<span class="chip variant-filled">Hitung Pengeluaran</span></a>
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead"><span class="badge bg-primary-500">></span></svelte:fragment>
		<svelte:fragment slot="summary">STEP 1</svelte:fragment>
		<svelte:fragment slot="content">
			               Siapkan bahan-bahan (jagung manis, margarin, keju parut, dan susu kental manis) lalu kukus jagung sampai empuk. Kemudian tambahkan margarin, susu, dan keju parut.
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead"><span class="badge bg-primary-500">></span></svelte:fragment>
				<svelte:fragment slot="summary">STEP 2</svelte:fragment>
		<svelte:fragment slot="content">
			               Setelah semua tercampur rata dan margarin meleleh, aduk rata.

		</svelte:fragment>
	</AccordionItem>

		<AccordionItem>
		<svelte:fragment slot="lead"><span class="badge bg-primary-500">></span></svelte:fragment>
				<svelte:fragment slot="summary">STEP 3</svelte:fragment>
		<svelte:fragment slot="content">
               Sajikan di atas mangkuk dengan taburan keju sesuai selera.

		</svelte:fragment>
	</AccordionItem>
	<section class="p-4">
<header class="card-header block card card-hover p-4">
            Begitulah cara pembuatan dari JASUKE. Nikmati segarnya JASUKE sebagai teman Anda di kala santai atau sebagai tambahan nutrisi sehat untuk tubuh Anda.
	</header>
	</section>
    
    <!-- ... -->
</Accordion>



</div>
</div>

<br>

<div class="box px-5">
<div class="card p-5 shadow-lg shadow">
<center><h6>BERIKAN KOMENTAR</h6></center>
  <form id="comment-form">

<label class="label">
	<span>Nama Kamu:</span>
	<input class="input variant-form-material"  id="name-input" type="text" placeholder="Nama" />
</label>
<br>

<label class="label">
	<span>Email Kamu:</span>
    <input class="input variant-form-material" type="text" id="email-input" placeholder="Email">
</label>
<br>

<label class="label">
	<span>Komentar Kamu:</span>
    <textarea class="textarea variant-form-material" id="comment-input" placeholder="Komentar"></textarea>
</label>
<br>

    <button class="btn variant-filled" type="button" id="submit-btn">Kirim Komentar</button>
  </form>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function() {

      $("#submit-btn").click(function() {
		var name = $("#name-input").val();
        var email = $("#email-input").val();
        var comment = $("#comment-input").val();

        if (name !== "" && email !== "" && comment !== "") {

          var newComment = $("<div>")
            .addClass("comment")
            .html("<br><hr><br><strong>" + name + "</strong> | " + email + "<br>" + comment);

          $("#comments").append(newComment);

          $("#name-input").val("");
          $("#email-input").val("");
          $("#comment-input").val("");
        }
      });
    });
  </script>

				 <div id="comments">
    <!-- Komentar akan ditambahkan di sini -->
  </div>

	</div>
	</div>

