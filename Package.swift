// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "IntuneMdmPlugin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "IntuneMdmPlugin",
            targets: ["AppConfigPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "AppConfigPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AppConfigPluginPlugin"),
        .testTarget(
            name: "AppConfigPluginPluginTests",
            dependencies: ["AppConfigPluginPlugin"],
            path: "ios/Tests/AppConfigPluginPluginTests")
    ]
)