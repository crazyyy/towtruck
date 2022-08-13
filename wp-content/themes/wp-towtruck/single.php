<?php get_header(); ?>

<?php if (have_posts()): while (have_posts()) : the_post(); ?>

  <article id="post-<?php the_ID(); ?>" <?php post_class('sppb-section sppb-section--post'); ?>
           data-sppb-parallax="on">
    <div class="sppb-row-container">
      <div class="sppb-row">
        <div class="sppb-col-md-12">
          <div class="sppb-column sppb-column--content">
            <div class="sppb-column-addons">
              <div class="sppb-wow zoomIn clearfix sppb-animated sppb-animated" data-sppb-wow-duration="2300ms" style="visibility: visible; animation-duration: 2300ms; animation-name: zoomIn;">
                <div class="sppb-addon sppb-addon-single-image">
                  <div class="sppb-addon-content">
                    <h1 class="page-title inner-title"><?php the_title(); ?></h1>
                    <?php the_content(); ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>

<?php endwhile; endif; ?>

<?php get_footer(); ?>
