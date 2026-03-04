<script></script>

<template>
    <nav id="header">
        <div class="nav-links">
            <div class="nav-bar">
                <RouterLink to="/"
                    ><img
                        src="/assets/icons/home.svg"
                        alt="HomeIcon"
                        width="30"
                        height="30"
                /></RouterLink>
                <RouterLink to="/levelCard"
                    ><img
                        src="/assets/icons/map.svg"
                        alt="MapIcon"
                        width="30"
                        height="30"
                /></RouterLink>
                <RouterLink to="/notepad"
                    ><img
                        src="/assets/icons/edit-3.svg"
                        alt="EditIcon"
                        width="30"
                        height="30"
                /></RouterLink>
                <RouterLink to="/saved"
                    ><img
                        src="/assets/icons/bookmark.svg"
                        alt="BookmarkIcon"
                        width="30"
                        height="30"
                /></RouterLink>
            </div>


            
            <ul>
                <li>
                    <RouterLink to="/quiz">Quiz</RouterLink>
                    <!-- tillfälligt placerad här -->
                </li>
            </ul>
        </div>
    </nav>
</template>
