<template>
  <div class="flex flex-col h-screen text-sm text-gray-400">
    <div class="flex-1 flex overflow-y-hidden">
      <!-- Sidebar -->
      <div
        class="sidebar bg-gray-spotify-900 w-48 flex-none flex flex-col justify-between font-semibold"
      >
        <ul class="py-6">
          <li class="border-l-4 border-green-600">
            <a href="#" class="flex item-center mx-4 mt-4 group">
              <svg
                class="w-5 text-white group-hover:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span class="ml-2 text-white group-hover:text-green-400">Home</span>
            </a>
          </li>
          <li class="border-l-4 border-gray-spotify-900">
            <a href="#" class="flex item-center mx-4 mt-4 group">
              <svg
                class="w-5 text-white group-hover:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                ></path>
              </svg>
              <span class="ml-2 text-white group-hover:text-green-400">Browse</span>
            </a>
          </li>
          <li class="border-l-4 border-gray-spotify-900">
            <a href="#" class="flex item-center mx-4 mt-4 group">
              <svg
                class="text-white group-hover:text-green-400 w-5"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="broadcast-tower"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M150.94 192h33.73c11.01 0 18.61-10.83 14.86-21.18-4.93-13.58-7.55-27.98-7.55-42.82s2.62-29.24 7.55-42.82C203.29 74.83 195.68 64 184.67 64h-33.73c-7.01 0-13.46 4.49-15.41 11.23C130.64 92.21 128 109.88 128 128c0 18.12 2.64 35.79 7.54 52.76 1.94 6.74 8.39 11.24 15.4 11.24zM89.92 23.34C95.56 12.72 87.97 0 75.96 0H40.63c-6.27 0-12.14 3.59-14.74 9.31C9.4 45.54 0 85.65 0 128c0 24.75 3.12 68.33 26.69 118.86 2.62 5.63 8.42 9.14 14.61 9.14h34.84c12.02 0 19.61-12.74 13.95-23.37-49.78-93.32-16.71-178.15-.17-209.29zM614.06 9.29C611.46 3.58 605.6 0 599.33 0h-35.42c-11.98 0-19.66 12.66-14.02 23.25 18.27 34.29 48.42 119.42.28 209.23-5.72 10.68 1.8 23.52 13.91 23.52h35.23c6.27 0 12.13-3.58 14.73-9.29C630.57 210.48 640 170.36 640 128s-9.42-82.48-25.94-118.71zM489.06 64h-33.73c-11.01 0-18.61 10.83-14.86 21.18 4.93 13.58 7.55 27.98 7.55 42.82s-2.62 29.24-7.55 42.82c-3.76 10.35 3.85 21.18 14.86 21.18h33.73c7.02 0 13.46-4.49 15.41-11.24 4.9-16.97 7.53-34.64 7.53-52.76 0-18.12-2.64-35.79-7.54-52.76-1.94-6.75-8.39-11.24-15.4-11.24zm-116.3 100.12c7.05-10.29 11.2-22.71 11.2-36.12 0-35.35-28.63-64-63.96-64-35.32 0-63.96 28.65-63.96 64 0 13.41 4.15 25.83 11.2 36.12l-130.5 313.41c-3.4 8.15.46 17.52 8.61 20.92l29.51 12.31c8.15 3.4 17.52-.46 20.91-8.61L244.96 384h150.07l49.2 118.15c3.4 8.16 12.76 12.01 20.91 8.61l29.51-12.31c8.15-3.4 12-12.77 8.61-20.92l-130.5-313.41zM271.62 320L320 203.81 368.38 320h-96.76z"
                />
              </svg>
              <span class="ml-2 text-white group-hover:text-green-400">Radio</span>
            </a>
          </li>
        </ul>
        <div class="overflow-y-auto sidebar-spotify">
          <h1>Middle</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nemo eaque similique
          reprehenderit, rem labore iure corporis, perferendis beatae praesentium, unde debitis
          numquam laboriosam ullam perspiciatis pariatur facere dolores tenetur cupiditate nihil at
          ipsam. Fugiat quos molestias error nulla nesciunt delectus amet minima labore! Omnis
          asperiores voluptatum aliquid beatae maiores perspiciatis aut itaque, officia, ex, sed
          reiciendis velit labore ipsum a quam at numquam esse eligendi eum! Facere voluptatibus
          suscipit expedita iusto dolores recusandae ab beatae commodi numquam? Molestiae aspernatur
          maiores impedit consectetur natus voluptatum voluptas at expedita laudantium. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Eligendi nemo eaque similique reprehenderit,
          rem labore iure corporis, perferendis beatae praesentium, unde debitis numquam laboriosam
          ullam perspiciatis pariatur facere dolores tenetur cupiditate nihil at ipsam. Fugiat quos
          molestias error nulla nesciunt delectus amet minima labore! Omnis asperiores voluptatum
          aliquid beatae maiores perspiciatis aut itaque, officia, ex, sed reiciendis velit labore
          ipsum a quam at numquam esse eligendi eum! Facere voluptatibus suscipit expedita iusto
          dolores recusandae ab beatae commodi numquam? Molestiae aspernatur maiores impedit
          consectetur natus voluptatum voluptas at expedita laudantium.
        </div>
        <div>three</div>
      </div>
      <!-- Content-Area -->
      <div class="content-spotify bg-gray-spotify-800 flex-1 overflow-y-auto">
        <h1>Content Area</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo voluptatem eum
        dolor enim expedita ab porro quae. Esse aliquid non incidunt eaque asperiores ipsa quasi,
        distinctio iste numquam ipsam dicta soluta aspernatur architecto, ducimus quibusdam nobis.
        Voluptates sequi architecto in rerum! Quisquam delectus magni, nostrum consectetur hic nisi
        doloribus repellat doloremque qui recusandae. Esse hic distinctio sint voluptates aut
        voluptate expedita consectetur adipisci ipsum? Optio quaerat similique illo iure sequi ea
        velit ullam non maxime harum officiis ad, sunt aperiam quibusdam iste est distinctio
        repudiandae magni dolorum delectus illum repellat obcaecati labore. Eum id illo minima
        inventore soluta! Esse molestiae expedita accusantium, ipsa obcaecati veniam maiores
        molestias odio minima magnam? Quod explicabo animi id ipsa, cum nisi delectus ipsam nam
        aperiam molestias sed. Optio quasi cum expedita officia dolor fugiat perferendis ipsum, fuga
        illo tempore quod suscipit doloribus distinctio. Nostrum iure cupiditate fugit totam,
        commodi placeat optio architecto! Nisi provident voluptatem beatae alias saepe nihil
        voluptate eligendi, libero at a veritatis voluptates vel dolorum sit reprehenderit tenetur
        quos totam doloremque. Maiores magnam libero fuga? Harum ipsa nam eius consectetur, officiis
        maxime nihil quae aspernatur eaque officia atque iure id obcaecati vitae est ipsum ea illo!
        Tempore, voluptatum modi? Commodi, ullam quae nostrum temporibus saepe qui dicta quo
        asperiores ea perferendis alias quis assumenda adipisci, soluta laboriosam. Ea quibusdam,
        incidunt rerum perspiciatis earum rem ab maxime laudantium laborum ducimus architecto
        maiores ut repellendus iusto mollitia ullam nobis voluptate dolor eaque deserunt iure. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo voluptatem eum dolor
        enim expedita ab porro quae. Esse aliquid non incidunt eaque asperiores ipsa quasi,
        distinctio iste numquam ipsam dicta soluta aspernatur architecto, ducimus quibusdam nobis.
        Voluptates sequi architecto in rerum! Quisquam delectus magni, nostrum consectetur hic nisi
        doloribus repellat doloremque qui recusandae. Esse hic distinctio sint voluptates aut
        voluptate expedita consectetur adipisci ipsum? Optio quaerat similique illo iure sequi ea
        velit ullam non maxime harum officiis ad, sunt aperiam quibusdam iste est distinctio
        repudiandae magni dolorum delectus illum repellat obcaecati labore. Eum id illo minima
        inventore soluta! Esse molestiae expedita accusantium, ipsa obcaecati veniam maiores
        molestias odio minima magnam? Quod explicabo animi id ipsa, cum nisi delectus ipsam nam
        aperiam molestias sed. Optio quasi cum expedita officia dolor fugiat perferendis ipsum, fuga
        illo tempore quod suscipit doloribus distinctio. Nostrum iure cupiditate fugit totam,
        commodi placeat optio architecto! Nisi provident voluptatem beatae alias saepe nihil
        voluptate eligendi, libero at a veritatis voluptates vel dolorum sit reprehenderit tenetur
        quos totam doloremque. Maiores magnam libero fuga? Harum ipsa nam eius consectetur, officiis
        maxime nihil quae aspernatur eaque officia atque iure id obcaecati vitae est ipsum ea illo!
        Tempore, voluptatum modi? Commodi, ullam quae nostrum temporibus saepe qui dicta quo
        asperiores ea perferendis alias quis assumenda adipisci, soluta laboriosam. Ea quibusdam,
        incidunt rerum perspiciatis earum rem ab maxime laudantium laborum ducimus architecto
        maiores ut repellendus iusto mollitia ullam nobis voluptate dolor eaque deserunt iure. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo voluptatem eum dolor
        enim expedita ab porro quae. Esse aliquid non incidunt eaque asperiores ipsa quasi,
        distinctio iste numquam ipsam dicta soluta aspernatur architecto, ducimus quibusdam nobis.
        Voluptates sequi architecto in rerum! Quisquam delectus magni, nostrum consectetur hic nisi
        doloribus repellat doloremque qui recusandae. Esse hic distinctio sint voluptates aut
        voluptate expedita consectetur adipisci ipsum? Optio quaerat similique illo iure sequi ea
        velit ullam non maxime harum officiis ad, sunt aperiam quibusdam iste est distinctio
        repudiandae magni dolorum delectus illum repellat obcaecati labore. Eum id illo minima
        inventore soluta! Esse molestiae expedita accusantium, ipsa obcaecati veniam maiores
        molestias odio minima magnam? Quod explicabo animi id ipsa, cum nisi delectus ipsam nam
        aperiam molestias sed. Optio quasi cum expedita officia dolor fugiat perferendis ipsum, fuga
        illo tempore quod suscipit doloribus distinctio. Nostrum iure cupiditate fugit totam,
        commodi placeat optio architecto! Nisi provident voluptatem beatae alias saepe nihil
        voluptate eligendi, libero at a veritatis voluptates vel dolorum sit reprehenderit tenetur
        quos totam doloremque. Maiores magnam libero fuga? Harum ipsa nam eius consectetur, officiis
        maxime nihil quae aspernatur eaque officia atque iure id obcaecati vitae est ipsum ea illo!
        Tempore, voluptatum modi? Commodi, ullam quae nostrum temporibus saepe qui dicta quo
        asperiores ea perferendis alias quis assumenda adipisci, soluta laboriosam. Ea quibusdam,
        incidunt rerum perspiciatis earum rem ab maxime laudantium laborum ducimus architecto
        maiores ut repellendus iusto mollitia ullam nobis voluptate dolor eaque deserunt iure.
        Inventore explicabo iure dolorum ullam iste eius aut, aperiam animi facere, culpa quasi
        aspernatur porro temporibus saepe totam vitae a, cumque amet harum dicta accusantium! Dolor
        eum odit aspernatur dolorum nemo deserunt neque molestias deleniti fugiat quis. Non
        cupiditate ex similique fugit! Nesciunt dignissimos corporis explicabo quia sit odio
        voluptate cumque architecto? Est sequi assumenda voluptas nemo recusandae natus, dolore
        minima esse numquam atque officia, accusantium quae molestiae adipisci pariatur repellat
        obcaecati quibusdam? Iure temporibus, deleniti, minus suscipit error aliquam aliquid,
        tempora alias tempore velit sed tenetur quod neque minima nam cupiditate eveniet dignissimos
        sunt? Neque odio possimus sequi nisi dolore dolorum, dicta delectus itaque, laboriosam rerum
        dolores excepturi officiis quasi consectetur praesentium voluptates. Incidunt officia
        dolorum beatae eveniet sed quis consectetur pariatur ipsum animi at excepturi maiores
        tempora quos magni quasi iusto quas eum unde, voluptatibus optio alias aperiam id laborum
        facere? Ea error minus, quasi odit voluptatibus atque possimus commodi deleniti ipsum ut
        laboriosam, a repudiandae voluptates magni officiis, suscipit quidem veritatis omnis sit
        laudantium obcaecati accusamus. Voluptas corporis atque quibusdam magni culpa iure suscipit
        soluta voluptate omnis quae, voluptatum, veniam doloremque nostrum natus esse iste molestiae
        non ut sed commodi at sint ullam illo. Quis in, distinctio dolorum esse eligendi unde quia
        libero ut, nesciunt incidunt alias voluptatem architecto totam quo et beatae expedita eaque
        laudantium adipisci autem! Rem voluptatibus cum aut dolore porro excepturi amet blanditiis
        delectus iusto aliquid architecto tempore doloribus voluptas cumque, enim nesciunt dolorem
        tempora quaerat ut reprehenderit, a veritatis? Similique, sit, id facilis assumenda corporis
        voluptatem eveniet illum vitae veniam aliquid voluptas. Dolorem quam doloremque illo culpa
        nisi voluptatibus blanditiis itaque impedit quos perspiciatis vel quia corporis sequi sit
        quidem, sint earum dolore odit illum a deleniti nulla accusantium. Commodi, nobis
        exercitationem facilis quisquam cupiditate optio explicabo, magni sit minima suscipit,
        sapiente temporibus quae nam hic corrupti! Itaque asperiores quibusdam praesentium sit?
        Consequuntur rem fugit ducimus fugiat voluptatem ab voluptas provident quaerat, voluptatibus
        maiores possimus atque eius? Et repellat laudantium non, molestias voluptatem alias
        blanditiis ab placeat cumque, inventore sit praesentium eos veniam quae facere? Aperiam
        tempora vero ratione beatae quos necessitatibus cumque neque cupiditate possimus? Minus a
        molestias vitae esse veniam ipsa, dolore quo eos, dolores exercitationem nobis id tempora
        deserunt cupiditate necessitatibus rerum, saepe nesciunt? Atque laudantium, temporibus non
        iste harum sint, voluptatum molestias aliquid amet eos consequatur saepe numquam natus
        laboriosam nulla deleniti asperiores? Totam tenetur officiis eos rerum natus. Dolores
        voluptatibus quasi quod incidunt nesciunt quam blanditiis, voluptates obcaecati minus nisi.
        Pariatur veritatis quam molestiae optio labore sapiente dolorum distinctio incidunt. Quae
        itaque tenetur culpa blanditiis fugiat. Atque veritatis ad iste earum excepturi. Error optio
        saepe quia maxime reprehenderit itaque delectus dolor qui, tempora, eius sapiente ipsum
        tenetur mollitia, inventore molestiae suscipit perferendis neque expedita sit?
      </div>
    </div>
    <!-- Bottom -->
    <div class="bg-gray-spotify-700">
      bottom
    </div>
  </div>
</template>

<script>
export default {
  name: "SpotifyClone",
};
</script>

<style>
/* .sidebar-spotify::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
} */

.sidebar-spotify::-webkit-scrollbar {
  width: 8px;
  background-color: #121212;
}

.sidebar-spotify::-webkit-scrollbar-thumb {
  border-radius: 8px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #535353;
}

.content-spotify::-webkit-scrollbar {
  width: 8px;
  background-color: #181818;
}

.content-spotify::-webkit-scrollbar-thumb {
  border-radius: 8px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #535353;
}
</style>
