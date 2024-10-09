import React from 'react';
import '../../style.css';

export default function Main() {
    return (
        <main>
            <section>
                <h2>Welcome</h2>
                <p>
                    Welcome to our fake birdwatching site. If this were a real site, it would be the ideal place to come to learn
                    more about birdwatching, whether you are a beginner looking to learn how to get into birding, or an expert
                    wanting to share ideas, tips, and photos with other like-minded people.
                </p>

                <p>
                    So don't waste time! Get what you need, then turn off that computer and get out into the great outdoors!
                </p>
            </section>
            <aside>
                <h2>Favourite photos</h2>
                <a href="favorite-1.jpg"><img src="../../public/assets/favorite-1.jpg" /></a>
                <a href="favorite-2.jpg"><img src="../../public/assets/favorite-2.jpg" /></a>
                <a href="favorite-3.jpg"><img src="../../public/assets/favorite-3.jpg" /></a>
                <a href="favorite-4.jpg"><img src="../../public/assets/favorite-4.jpg" /></a>
            </aside>
        </main>
    );
};