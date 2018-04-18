var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}
https://pasteboard.co/images/Hhf02Eu.jpg/download',
is_stereo: false,
var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'assets/dolphins.jpg',
  image: '',
  is_stereo: true,
});

window.addEventListener('load', drawingRoom);

