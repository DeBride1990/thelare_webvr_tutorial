var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}
https://cdn.pbrd.co/images/Hhf02Eu.jpg/download',false
var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'assets/dolphins.jpg',
  image: '',
  is_stereo: true,
});

window.addEventListener('load', drawingRoom);

