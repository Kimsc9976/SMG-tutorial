function getMic()
{
  const openMic = (constraints) =>{
    return navigator.mediaDevices.getUserMedia(constraints);
  }
  const audio = document.querySelector('audio');
  const constraints = window.constraints = {
    audio: true,
    video: false
  };

  async function startMic(constraints) {
    try
    {
      let stream = await openMic(constraints);
      const audioTracks = stream.getAudioTracks();
      console.log('Using audio device: ' + audioTracks[0].label);
      window.stream = stream; // make variable available to browser console
      audio.srcObject = stream; // check for proper streaming
    }
    catch(error)
    {
      throw error;
    }
  }
  
  startMic(constraints);
}