<template>
    <div style="border: 1px solid green;">
            <ul>
                <li>customer</li>
                <li>
                    <router-link to="/customer/dashboard">dashboard</router-link>
                </li>
                <li>
                    <router-link to="/customer/setting">settings</router-link>
                </li>
                <li>
                    <h5>user management</h5>
                    <ul>
                        <li><router-link to="/customer/user/all">all user</router-link></li>
                        <li><router-link to="/customer/user/details/23">details user</router-link></li>
                    </ul>
                </li>
                <li>
                    <h5>blog management</h5>
                    <ul>
                        <li><router-link to="/customer/blog/all">all blog</router-link></li>
                        <li><router-link to="/customer/blog/details/96">details blog</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
</template>

<script setup>

</script>