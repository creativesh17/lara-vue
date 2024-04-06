<template>
    <div style="border: 1px solid green;">
            <ul>
                <li>admin</li>
                <li>
                    <router-link to="/admin/dashboard">dashboard</router-link>
                </li>
                <li>
                    <router-link to="/admin/setting">settings</router-link>
                </li>
                <li>
                    <h5>user management</h5>
                    <ul>
                        <li><router-link to="/admin/user/all">all user</router-link></li>
                        <li><router-link to="/admin/user/details/23">details user</router-link></li>
                    </ul>
                </li>
                <li>
                    <h5>blog management</h5>
                    <ul>
                        <li><router-link to="/admin/blog/all">all blog</router-link></li>
                        <li><router-link to="/admin/blog/details/96">details blog</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
</template>

<script setup>

</script>