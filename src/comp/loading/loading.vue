<template>
    <div class="overlay">
      
        <div class="loader">
            <div class="loader-inner square-spin">
              <div></div>
            </div>
          </div>
      
    </div>
</template>
<style>
.overlay{
  width:100%;
  height:100%;
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(40,40,40,.4);
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
     
}


@-webkit-keyframes square-spin {
  25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
            transform: perspective(100px) rotateX(180deg) rotateY(0); }

  50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
            transform: perspective(100px) rotateX(180deg) rotateY(180deg); }

  75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
            transform: perspective(100px) rotateX(0) rotateY(180deg); }

  100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
            transform: perspective(100px) rotateX(0) rotateY(0); } }

@keyframes square-spin {
  25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
            transform: perspective(100px) rotateX(180deg) rotateY(0); }

  50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
            transform: perspective(100px) rotateX(180deg) rotateY(180deg); }

  75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
            transform: perspective(100px) rotateX(0) rotateY(180deg); }

  100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
            transform: perspective(100px) rotateX(0) rotateY(0); } }

.square-spin > div {
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  width: 50px;
  height: 50px;
  background: #1d84ed;
  border: 1px solid #1a77d5;
  -webkit-animation: square-spin 3s 0s cubic-bezier(.09, .57, .49, .9) infinite;
          animation: square-spin 3s 0s cubic-bezier(.09, .57, .49, .9) infinite; }

</style>