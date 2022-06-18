const video = document.getElementById("video");
        const canvas = document.getElementById("canvas");
        const dlLink = document.getElementById("dl");
        dlLink.style.display = "none";

        function iniciar() {
            navigator.mediaDevices.getUserMedia ({
            audio: false,
            video: true,
            })
            .then((stream) => {
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                }
            });
        }

        function parar() {
            if(video.srcObject) {
                //video.pause();
                video.srcObject.getTracks().forEach((track) => track.stop());
            }
        }
        

        function tirarFoto() {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, 320, 240);

            const hrefImg = canvas.toDataURL("image/png");
            dlLink.style.display = "inline";
            dlLink.href = hrefImg;

        }