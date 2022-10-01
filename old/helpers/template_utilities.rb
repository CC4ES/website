module TemplateUtilities
  def phone_to(num)
    link_to num, "tel:#{num}"
  end

  def is_current_page_active?(page)
    return current_page.data.has_key?('key') && current_page.data['key'] == page
  end

  def image_link(img)
    "#{root_url}/images#{img}"
  end

  def app_link(route)
    return data.site.app_link + route
  end

  def root_url
    config[:host]
  end

end