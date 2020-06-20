export default {
    path: "/style",
    name: "",
    name: 'Style',
    component: () => {
        import ("@/pages/Style.vue");
    },
    children: [{
            path: "color",
            name: "Color",
            component: () => {
                import ("@/pages/Style/Color.vue");
            },
        },
        {
            path: "spacing",
            name: "Spacing",
            component: () => {
                import ("@/pages/Style/Spacing.vue");
            },
        },
        {
            path: "position",
            name: "Position",
            component: () => {
                import ("@/pages/Style/Position.vue");
            },
        },
        {
            path: "shadow",
            name: "Shadow",
            component: () => {
                import ("@/pages/Style/Shadow.vue");
            },
        },
        {
            path: "typography",
            name: "Typography",
            component: () => {
                import ("@/pages/Style/Typography.vue");
            },
        },
        {
            path: "display",
            name: "Display",
            component: () => {
                import ("@/pages/Style/Display.vue");
            },
        },
        {
            path: "flex",
            name: "Flex",
            component: () => {
                import ("@/pages/Style/Flex.vue");
            },
        },
        {
            path: "grid",
            name: "Grid",
            component: () => {
                import ("@/pages/Style/Grid.vue");
            },
        },
        {
            path: "darkmode",
            name: "Dark-mode",
            component: () => {
                import ("@/pages/Style/DarkMode.vue");
            },
        },
        {
            path: "assist",
            name: "Assist",
            component: () => {
                import ("@/pages/Style/Assist.vue");
            },
        },
        {
            path: "responsive",
            name: "Responsive",
            component: () => {
                import ("@/pages/Style/Responsive.vue");
            },
        },
    ],
};