document.getElementById("header-container").innerHTML = `
            <div id="headerArea">
                <div id="header"></div>
                    <nav id="navbar">
                        <ul>
                            <li><a href="index.html">HOME</a></li>
                            <div class="dropdown">
                                <button class="dropbtn">PROJECTS</button>
                                <div class="dropdown-content">
                                    <a href="https://github.com/meg-an31">My Github</a>
                                    <a href="blackoutTextGenerator.html">Blackout Poetry Generator</a>
                                </div>
                            </div>
                            <li><a href="writingIndex.html">WRITING</a></li>
                        </ul>
                    </nav>
            </div>`;

document.getElementById("aside-container").innerHTML = `
                <aside id="leftSidebar">
                    <h2>Music</h2>
                    <p>Song: duvet cyberia reMIX</p>
                    <audio controls src="duvet cyberia reMIX.mp3"></audio>
                    <br>

                    <h2>Updates</h2>
                    
                    <div class="box">
                        <ul style="padding-left:10px;">
                            <li>Added some of my writing;</li>
                            <br>
                            <li>included a link to my github.</li>
                        </ul>
                    </div>
                    
                    <h2>hi!</h2>
                    <h3>Places where i am</h3>
                    <ul>
                        <li><a href="https://open.spotify.com/user/9urm7zjhtgbte5kndzwlkvzm7?si=8ca3b805e79a4f61" target="_blank">Spotify</a>
                    </ul>
                </aside>`;