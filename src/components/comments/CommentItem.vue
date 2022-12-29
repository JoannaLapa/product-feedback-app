<template>
    <!-- is there any html tag semantically better for a code below?
    figure?? -->
  <div>
<img src="../assets/user-images/image-.jpg" alt="">
<!-- check how to add user name to img src and alt dynamically from comments.user.name -->
<h3>{{  }}</h3>
<!-- here comments.user.name -->
<p>{{  }}</p>
<!-- here comments.user.username -->
<button>Reply</button>
  </div>  
  <blockquote>
    {{  }}
  </blockquote>
  <!-- here comments.content -->
  <!-- v-if reply add span with username who replies - replies.replyingTo -->
  <slot></slot>
</template>

<script>
</script>