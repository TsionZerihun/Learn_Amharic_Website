from django.db import models

class Nums(models.Model):
    name = models.CharField('Pic name', max_length=120)
    description = models.TextField(blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images/nums/")

    
    
    def __str__(self):
        return self.name

class Pronouns(models.Model):
    name = models.CharField('Pic name', max_length=120)
    description = models.TextField(blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images/pro/")
 
    def __str__(self):
        return self.name

class Intros(models.Model):
    name = models.CharField('Pic name', max_length=120)
    description = models.TextField(blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images/intro/")

    
    def __str__(self):
        return self.name

class Days(models.Model):
    name = models.CharField('Pic name', max_length=120)
    description = models.TextField(blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images/intro/")
    
    def __str__(self):
        return self.name

class Wh(models.Model):
    name = models.CharField('Pic name', max_length=120)
    description = models.TextField(blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images/intro/")
    
    def __str__(self):
        return self.name

class Familys(models.Model):
    name = models.CharField('Pic name', max_length=120)
    description = models.TextField(blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images/family/")
 
    def __str__(self):
        return self.name