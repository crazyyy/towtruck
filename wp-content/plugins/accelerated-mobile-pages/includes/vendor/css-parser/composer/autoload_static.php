<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
class ComposerStaticInit36c553b877d93c41f97bfeeed7ef5433
{
    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Sabberworm\\CSS' => 
            array (
                0 => __DIR__ . '/..' . '/sabberworm/php-css-parser/lib',
            ),
        ),
    );

    public static $classMap = array (
        'AmpProject\\Amp' => __DIR__ . '/../..' . '/tool/Amp.php',
        'AmpProject\\Attribute' => __DIR__ . '/../..' . '/tool/Attribute.php',
        'AmpProject\\CssLength' => __DIR__ . '/../..' . '/tool/CssLength.php',
        'AmpProject\\DevMode' => __DIR__ . '/../..' . '/tool/DevMode.php',
        'AmpProject\\Dom\\Document' => __DIR__ . '/../..' . '/tool/Dom/Document.php',
        'AmpProject\\Dom\\Document\\Encoding' => __DIR__ . '/../..' . '/tool/Dom/Document/Encoding.php',
        'AmpProject\\Dom\\Document\\Option' => __DIR__ . '/../..' . '/tool/Dom/Document/Option.php',
        'AmpProject\\Dom\\Element' => __DIR__ . '/../..' . '/tool/Dom/Element.php',
        'AmpProject\\Dom\\ElementDump' => __DIR__ . '/../..' . '/tool/Dom/ElementDump.php',
        'AmpProject\\Dom\\NodeWalker' => __DIR__ . '/../..' . '/tool/Dom/NodeWalker.php',
        'AmpProject\\Extension' => __DIR__ . '/../..' . '/tool/Extension.php',
        'AmpProject\\Layout' => __DIR__ . '/../..' . '/tool/Layout.php',
        'AmpProject\\LengthUnit' => __DIR__ . '/../..' . '/tool/LengthUnit.php',
        'AmpProject\\Optimizer\\Configuration' => __DIR__ . '/../..' . '/tool/Optimizer/Configuration.php',
        'AmpProject\\Optimizer\\Configuration\\AmpRuntimeCssConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/Configuration/AmpRuntimeCssConfiguration.php',
        'AmpProject\\Optimizer\\Configuration\\BaseTransformerConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/Configuration/BaseTransformerConfiguration.php',
        'AmpProject\\Optimizer\\Configuration\\OptimizeAmpBindConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/Configuration/OptimizeAmpBindConfiguration.php',
        'AmpProject\\Optimizer\\Configuration\\PreloadHeroImageConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/Configuration/PreloadHeroImageConfiguration.php',
        'AmpProject\\Optimizer\\Configuration\\RewriteAmpUrlsConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/Configuration/RewriteAmpUrlsConfiguration.php',
        'AmpProject\\Optimizer\\Configuration\\TransformedIdentifierConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/Configuration/TransformedIdentifierConfiguration.php',
        'AmpProject\\Optimizer\\CssRule' => __DIR__ . '/../..' . '/tool/Optimizer/CssRule.php',
        'AmpProject\\Optimizer\\CssRules' => __DIR__ . '/../..' . '/tool/Optimizer/CssRules.php',
        'AmpProject\\Optimizer\\DefaultConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/DefaultConfiguration.php',
        'AmpProject\\Optimizer\\Error' => __DIR__ . '/../..' . '/tool/Optimizer/Error.php',
        'AmpProject\\Optimizer\\ErrorCollection' => __DIR__ . '/../..' . '/tool/Optimizer/ErrorCollection.php',
        'AmpProject\\Optimizer\\Error\\CannotAdaptDocumentForSelfHosting' => __DIR__ . '/../..' . '/tool/Optimizer/Error/CannotAdaptDocumentForSelfHosting.php',
        'AmpProject\\Optimizer\\Error\\CannotInlineRuntimeCss' => __DIR__ . '/../..' . '/tool/Optimizer/Error/CannotInlineRuntimeCss.php',
        'AmpProject\\Optimizer\\Error\\CannotPerformServerSideRendering' => __DIR__ . '/../..' . '/tool/Optimizer/Error/CannotPerformServerSideRendering.php',
        'AmpProject\\Optimizer\\Error\\CannotPreloadImage' => __DIR__ . '/../..' . '/tool/Optimizer/Error/CannotPreloadImage.php',
        'AmpProject\\Optimizer\\Error\\CannotRemoveBoilerplate' => __DIR__ . '/../..' . '/tool/Optimizer/Error/CannotRemoveBoilerplate.php',
        'AmpProject\\Optimizer\\Error\\ErrorProperties' => __DIR__ . '/../..' . '/tool/Optimizer/Error/ErrorProperties.php',
        'AmpProject\\Optimizer\\Error\\TooManyHeroImages' => __DIR__ . '/../..' . '/tool/Optimizer/Error/TooManyHeroImages.php',
        'AmpProject\\Optimizer\\Error\\UnknownError' => __DIR__ . '/../..' . '/tool/Optimizer/Error/UnknownError.php',
        'AmpProject\\Optimizer\\Exception\\AmpOptimizerException' => __DIR__ . '/../..' . '/tool/Optimizer/Exception/AmpOptimizerException.php',
        'AmpProject\\Optimizer\\Exception\\InvalidArgument' => __DIR__ . '/../..' . '/tool/Optimizer/Exception/InvalidArgument.php',
        'AmpProject\\Optimizer\\Exception\\InvalidConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/Exception/InvalidConfiguration.php',
        'AmpProject\\Optimizer\\Exception\\InvalidConfigurationKey' => __DIR__ . '/../..' . '/tool/Optimizer/Exception/InvalidConfigurationKey.php',
        'AmpProject\\Optimizer\\Exception\\InvalidConfigurationValue' => __DIR__ . '/../..' . '/tool/Optimizer/Exception/InvalidConfigurationValue.php',
        'AmpProject\\Optimizer\\Exception\\InvalidHtmlAttribute' => __DIR__ . '/../..' . '/tool/Optimizer/Exception/InvalidHtmlAttribute.php',
        'AmpProject\\Optimizer\\Exception\\UnknownConfigurationClass' => __DIR__ . '/../..' . '/tool/Optimizer/Exception/UnknownConfigurationClass.php',
        'AmpProject\\Optimizer\\Exception\\UnknownConfigurationKey' => __DIR__ . '/../..' . '/tool/Optimizer/Exception/UnknownConfigurationKey.php',
        'AmpProject\\Optimizer\\HeroImage' => __DIR__ . '/../..' . '/tool/Optimizer/HeroImage.php',
        'AmpProject\\Optimizer\\ImageDimensions' => __DIR__ . '/../..' . '/tool/Optimizer/ImageDimensions.php',
        'AmpProject\\Optimizer\\LocalFallback' => __DIR__ . '/../..' . '/tool/Optimizer/LocalFallback.php',
        'AmpProject\\Optimizer\\TransformationEngine' => __DIR__ . '/../..' . '/tool/Optimizer/TransformationEngine.php',
        'AmpProject\\Optimizer\\Transformer' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer.php',
        'AmpProject\\Optimizer\\TransformerConfiguration' => __DIR__ . '/../..' . '/tool/Optimizer/TransformerConfiguration.php',
        'AmpProject\\Optimizer\\Transformer\\AmpBoilerplate' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/AmpBoilerplate.php',
        'AmpProject\\Optimizer\\Transformer\\AmpBoilerplateErrorHandler' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/AmpBoilerplateErrorHandler.php',
        'AmpProject\\Optimizer\\Transformer\\AmpRuntimeCss' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/AmpRuntimeCss.php',
        'AmpProject\\Optimizer\\Transformer\\OptimizeAmpBind' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/OptimizeAmpBind.php',
        'AmpProject\\Optimizer\\Transformer\\PreloadHeroImage' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/PreloadHeroImage.php',
        'AmpProject\\Optimizer\\Transformer\\ReorderHead' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/ReorderHead.php',
        'AmpProject\\Optimizer\\Transformer\\RewriteAmpUrls' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/RewriteAmpUrls.php',
        'AmpProject\\Optimizer\\Transformer\\ServerSideRendering' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/ServerSideRendering.php',
        'AmpProject\\Optimizer\\Transformer\\TransformedIdentifier' => __DIR__ . '/../..' . '/tool/Optimizer/Transformer/TransformedIdentifier.php',
        'AmpProject\\RemoteGetRequest' => __DIR__ . '/../..' . '/tool/RemoteGetRequest.php',
        'AmpProject\\RemoteRequest\\CurlRemoteGetRequest' => __DIR__ . '/../..' . '/tool/RemoteRequest/CurlRemoteGetRequest.php',
        'AmpProject\\RemoteRequest\\FallbackRemoteGetRequest' => __DIR__ . '/../..' . '/tool/RemoteRequest/FallbackRemoteGetRequest.php',
        'AmpProject\\RemoteRequest\\FilesystemRemoteGetRequest' => __DIR__ . '/../..' . '/tool/RemoteRequest/FilesystemRemoteGetRequest.php',
        'AmpProject\\RemoteRequest\\RemoteGetRequestResponse' => __DIR__ . '/../..' . '/tool/RemoteRequest/RemoteGetRequestResponse.php',
        'AmpProject\\RemoteRequest\\StubbedRemoteGetRequest' => __DIR__ . '/../..' . '/tool/RemoteRequest/StubbedRemoteGetRequest.php',
        'AmpProject\\Response' => __DIR__ . '/../..' . '/tool/Response.php',
        'AmpProject\\Role' => __DIR__ . '/../..' . '/tool/Role.php',
        'AmpProject\\RuntimeVersion' => __DIR__ . '/../..' . '/tool/RuntimeVersion.php',
        'AmpProject\\Tag' => __DIR__ . '/../..' . '/tool/Tag.php',
        'AmpProject\\Url' => __DIR__ . '/../..' . '/tool/Url.php',
        'Composer\\InstalledVersions' => __DIR__ . '/../..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit36c553b877d93c41f97bfeeed7ef5433::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit36c553b877d93c41f97bfeeed7ef5433::$classMap;

        }, null, ClassLoader::class);
    }
}
