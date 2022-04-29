pluginManagement {
    val quarkusPluginVersion: String by settings
    val quarkusPluginId: String by settings

    repositories {
        mavenLocal()
        mavenCentral()
        gradlePluginPortal()
    }
    plugins {
        id(quarkusPluginId) version quarkusPluginVersion
    }
}

rootProject.name = "anthaathi"

include(
    ":libs:anthaathi-common-node-bom",
    ":libs:anthaathi-web-lib",
    ":libs:anthaathi-form-builder"
)

include(
    ":apps:anthaathi-cms",
    ":apps:anthaathi-cms-web-client",
    ":apps:anthaathi-crm-web-client"
)

include("devsecops")
include(":devsecops:infrastructure")